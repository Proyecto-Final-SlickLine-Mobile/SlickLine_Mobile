import React from 'react';
import { Button,StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Button style={styles.logoutButton} title="Cerrar Sesión" onPress={handleLogout} />
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    height: 50,
    backgroundColor: '#FF0000',
    color: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
},
})
