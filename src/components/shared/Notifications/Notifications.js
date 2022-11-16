import { createContext, useContext, useEffect, useState } from 'react';

import styles from './Notifications.module.css';

const NotificationsContext = createContext();

const Notification = ({ id, type, heading, text, onClose, delayClose }) => {
  const [state, setState] = useState('');

  const closeNotification = () => {
    setState('close');
    setTimeout(() => {
      onClose(id);
    }, 1500);
  };

  const handlerBtnCloseClick = () => {
    closeNotification();
  };

  useEffect(() => {

      setState('open');

    if (delayClose > 0) {
      setTimeout(() => {
        closeNotification();
      }, delayClose);
    }
  }, []);

  return (
    <div
      className={`${styles.notification} ${
        type === 'success' ? styles.notification_type_success : ''
      }${type === 'error' ? styles.notification_type_error : ''} ${
        state === 'open' ? styles.notification_state_open : ''
      }${state === 'close' ? styles.notification_state_close : ''}
      `}
    >
      <div>
        <p className={styles.notification__heading}>{heading}</p>
        <p className={styles.notification__text}>{text}</p>
      </div>
      <button
        type="button"
        className={styles.notification__btnClose}
        onClick={handlerBtnCloseClick}
        aria-label="Закрыть уведомление."
      />
    </div>
  );
};

const Notifications = ({ delayClose, children }) => {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (notification, delayClose = null) => {
    const date = new Date();
    const newId = date.getSeconds() + date.getMilliseconds() + Math.random();
    const newNotification = {
      ...notification,
      id: newId,
    };
    if (delayClose !== null) {
      newNotification.delayClose = delayClose;
    }
    setNotifications((notifications) => [newNotification, ...notifications]);
    return newId;
  };

  const closeNotification = (id) => {
    setNotifications((notifications) =>
      notifications.reduce((prev, not) => {
        if (not.id !== id) {
          prev.push(not);
        }
        return prev;
      }, [])
    );
  };

  return (
    <NotificationsContext.Provider value={pushNotification}>
      <div className={styles.notifications}>
        {notifications.map((item) => (
          <Notification
            {...item}
            key={item.id}
            onClose={closeNotification}
            delayClose={
              item.delayClose || item.delayClose === 0
                ? item.delayClose
                : delayClose
            }
          />
        ))}
      </div>
      {children}
    </NotificationsContext.Provider>
  );
};

export const usePushNotification = () => {
  return useContext(NotificationsContext);
};

export default Notifications;
