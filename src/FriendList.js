import { ScrollView } from "react-native";
import Profile from "./Profile";

export default (props) => {
    return (
        <ScrollView>
            {props.data.map((item) => (
                <Profile
                    uri={item.uri}
                    name={item.name}
                    introduction={item.introduction}
                />
            ))} 
        </ScrollView>
    )
};
