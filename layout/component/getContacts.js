import Contacts from 'react-native-contacts';
export const getContacts = async () => {
      try {
        const allContacts = await Contacts.getAll();
        return allContacts;
      } catch (error) {
        console.error("Failed to load contacts:", error);
      }    
  };