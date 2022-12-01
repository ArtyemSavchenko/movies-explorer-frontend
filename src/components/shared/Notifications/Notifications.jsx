import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Notifications.module.css';

const NotificationsContext = createContext();

let actualId = 0;
const generateId = () => {
  return actualId++;
};

const Notification = ({ id, type, heading, text, onClose, delayClose }) => {
  const [state, setState] = useState('');

  const closeNotification = useCallback(() => {
    setState('close');
    setTimeout(() => {
      onClose(id);
    }, 1500);
  }, [id, onClose]);

  useEffect(() => {
    if (delayClose > 0) {
      setTimeout(() => {
        closeNotification();
      }, delayClose);
    }
  }, [delayClose, closeNotification]);

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
        onClick={closeNotification}
        aria-label="Закрыть уведомление."
      />
    </div>
  );
};

const Notifications = ({
  delayClose = null,
  notifications,
  closeNotification,
}) => {
  return createPortal(
    <div className={styles.notifications}>
      {notifications.map((item) => (
        <Notification
          {...item}
          key={item.id}
          onClose={closeNotification}
          delayClose={Boolean(item.delayClose) ? item.delayClose : delayClose}
        />
      ))}
    </div>,
    document.body
  );
};

const NotificationsProvider = ({ children, delayClose = null }) => {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = useCallback((notification, delayClose = null) => {
    const newId = generateId();
    const newNotification = {
      ...notification,
      id: newId,
    };

    if (delayClose !== null) {
      newNotification.delayClose = delayClose;
    }

    setNotifications((notifications) => [newNotification, ...notifications]);

    return newId;
  }, []);

  const closeNotification = useCallback((id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  }, []);

  return (
    <NotificationsContext.Provider value={pushNotification}>
      <Notifications
        notifications={notifications}
        closeNotification={closeNotification}
        delayClose={delayClose}
      />
      {children}
    </NotificationsContext.Provider>
  );
};

export const usePushNotification = () => {
  return useContext(NotificationsContext);
};

export default NotificationsProvider;
