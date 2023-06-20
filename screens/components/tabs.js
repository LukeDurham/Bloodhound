
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/tabStyles';

function Tabs() {
    const navigation = useNavigation();
  return (
    <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
                style={styles.menuIcon}
                source={require("../../assets/icons/user.png")}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
                style={styles.menuIcon}
                source={require("../../assets/icons/spotify.png")}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image
                style={styles.menuIcon}
                source={require("../../assets/icons/bookmark.png")}
            />
        </TouchableOpacity>
        
    </View>
    
  );
}
export default Tabs;