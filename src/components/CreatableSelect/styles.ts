import { StylesConfig } from 'react-select';
import { lighten } from 'polished';

export const NavBarStyle: StylesConfig = {
    container: styles => ({
        ...styles,
        height: '36px',
        width: '100%',
    }),

    dropdownIndicator: styles => ({
        display: 'none',
        height: '0px',
    }),

    indicatorsContainer: styles => ({
        display: 'none',
    }),

    indicatorSeparator: styles => ({
        display: 'none',
    }),

    control: (styles, props) => (
        {
        ...styles,
        cursor: 'pointer',
        minHeight: '36px',
        width: '100%',
        padding: '0 8px',
        boxShadow: 'none',
        backgroundColor: props.isFocused ? 
            '#f2f2f2'
            : '#e1e1e1',
        border: props.isFocused ? 
            '2px solid #536DFE'
            : '2px solid #e1e1e1',

        transition: 'all 0.2s',

        '&:hover': {
            borderColor: '#536DFE',

        },
    }),

    valueContainer: styles => ({
        ...styles,
        height: '36px',
        width: '100%',
        padding: '0',
        justifyContent: 'center',
        alignItems: 'center',
    }),

    menu: styles => ({
        ...styles,
        background: '#f2f2f2',
        color: '#293845',
    }),

    option: (styles, props) => ({
        ...styles,
        fontWeight: 600,
        
        backgroundColor: props.isDisabled
        ? '#f2f2f2'
        : props.isSelected
        ? '#536DFE'
        : props.isFocused
        ? lighten(0.1, '#536DFE')
        : '#f2f2f2',

        color: props.isDisabled
        ? '#f2f2f2'
        : props.isSelected
        ? 'white'
        : props.isFocused
        ? 'white'
        : '#666',

        cursor: 'pointer',

        ':active': {
            backgroundColor:
            !props.isDisabled &&
            (props.isSelected ? props.data.color : lighten(0.1, '#536DFE')),
        },
    }),

    input: styles => ({
        ...styles,
    }),
}


export const ActivityStyle: StylesConfig = {
    container: styles => ({
        ...styles,
        height: '36px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }),

    dropdownIndicator: styles => ({
        display: 'none',
        height: '0px',
    }),

    indicatorsContainer: styles => ({
        display: 'none',
    }),

    indicatorSeparator: styles => ({
        display: 'none',
    }),

    control: (styles, props) => ({
        ...styles,
        cursor: 'pointer',
        minHeight: '36px',
        maxHeight: '36px',
        fontWeight: 600,
        width: '100%',
        padding: '0 8px',
        boxShadow: 'none',
        backgroundColor: props.hasValue ? '#536DFE' :
            props.isFocused ? '#f2f2f2' : '#e1e1e1',
            
        border: props.hasValue ? 
            '2px solid #536DFE'
            : '2px solid #e1e1e1',

        transition: 'all 0.2s',

        '&:hover': {
            borderColor: props.hasValue ? 
            '2px solid #536DFE'
            : '2px solid #e1e1e1',

        },
    }),

    valueContainer: styles => ({
        ...styles,
        height: '32px',
        width: '100%',
        padding: '0',
        justifyContent: 'center',
        alignItems: 'center',
    }),

    menu: styles => ({
        ...styles,
        background: '#f2f2f2',
        color: '#293845',
    }),

    option: (styles, props) => ({
        ...styles,
        fontWeight: 600,
        
        backgroundColor: props.isDisabled
        ? '#f2f2f2'
        : props.isSelected
        ? '#536DFE'
        : props.isFocused
        ? lighten(0.1, '#536DFE')
        : '#f2f2f2',

        color: props.isDisabled
        ? '#f2f2f2'
        : props.isSelected
        ? 'white'
        : props.isFocused
        ? 'white'
        : '#666',

        cursor: 'pointer',

        ':active': {
            backgroundColor:
            !props.isDisabled &&
            (props.isSelected ? props.data.color : lighten(0.1, '#536DFE')),
        },
    }),

    input: (styles, props) => ({
        maxHeight: '32px',
    }),

    singleValue: styles => ({
        ...styles,
        color: '#f2f2f2',
    }),
}