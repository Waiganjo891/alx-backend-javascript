// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return rooms;
}

export default initializeRooms;
