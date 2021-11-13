import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
          

export default function Range() {
    const [value, setValue] = useState(1);
    const [dependValue, setDependValue] = useState(1000);
    const scaleValue = [3, 7, 14, 54, 70];

    const onHandleChangeDependValue = (e) => {
        setDependValue(e.target.value)
    };

    const onHandleChangeValue = (e) => {
        if (dependValue <= 10000 && e.target.value < 4) {
            setValue(e.target.value)
            return
        } else if (dependValue > 10000 && e.target.value > 3) {
            setValue(e.target.value)
            return
        }
    };

    useEffect(() => {
        if (dependValue <= 10000 && value >= 3) {
            setValue(1)
        } else if (dependValue > 10000 && value <= 3) {
            setValue(4)
        }
    }, [dependValue]);

    const calculateValue = () => {
        return scaleValue[value - 1]
    };

    return (
        <Box sx={{ width: 250, paddingTop: '100px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Slider
                value={dependValue}
                min={1000}
                max={20000}
                step={1000}
                onChange={onHandleChangeDependValue}
                valueLabelDisplay="auto"
            />
            <Slider
                value={value}
                min={1}
                step={1}
                max={5}
                scale={calculateValue}
                onChange={onHandleChangeValue}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};
