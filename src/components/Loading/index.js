import * as React from "react";
import PropTypes from 'prop-types';
import {Root, View, Spinner} from "native-base";
import platformStyles from 'app-theme/variables/platform';

export default class Loading extends React.Component {
    static propTypes = {
        children: PropTypes.element,
        isLoading: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Spinner color={platformStyles.brandPrimary}/>
                </View>
            )
        }

        if (this.props.children) {
            return this.props.children;
        }

        return null;
    }
}