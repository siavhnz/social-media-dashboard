import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, semitheme }) => {
    return {
        width: 46,
        height: 24,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 3,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(22px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : 'hsl(230, 22%, 74%)',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            background: semitheme === "true" ? "hsl(227, 47%, 96%)" : "hsl(228, 28%, 20%)",
            width: 18,
            height: 18,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            background: semitheme === 'true' ? 'hsl(230, 22%, 74%)' : 'linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%);',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }
}

);

export default IOSSwitch;