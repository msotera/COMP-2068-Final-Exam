import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from "../../shared/Globals";

const Destroy = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  
  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/game/destroy`, { _id: id })
    .then(() => {
      setNotification({
        type: 'success',
        message: 'The Game has been successfuly destroyed...I mean deleted :) ',
      });
    })
    .catch((error) => {
      setNotification({
        type: 'danger',
        message: `Sorry, we cannot destroy the selected game file due to the following error: ${error.message}`,
      });
    });
}, [globalStore, id, setNotification]);

  return <Redirect to="/"/>;
};
 
export default Destroy;