import { useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "styles/components/Product/ProductSpecs.css";
import { Grid } from "@mui/material";
import Review from "./Review";

function ProductSpecs(props) {
    const { Product } = props;
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <div className="productSpecs">
            <div>
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    sx={{
                        border : 1,
                        borderColor:"divider",
                    }}
                >
                    <Tab label="Details"/>
                    <Tab label="Specifications"/>
                    <Tab label="Reviews"/>
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                {Product.details}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {Object.keys(Product?.specifications).map((spec)=>{
                    return (
                        <Grid container>
                            <Grid item xs={5}>{spec}</Grid>
                            <Grid item xs={1}>:</Grid>
                            <Grid item xs={6}>{Product.specifications[spec]}</Grid>
                        </Grid>
                    )
                })}
            </TabPanel>
            <TabPanel value={value} index={2} className="reviewsWrapper" >
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </TabPanel>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        className="productSpec--panel"
        id={`productSpec--${index}`}
        {...other}
      >
        {value === index && (
            <>
                {children}
            </>
        )}
      </div>
    );
  }

export default ProductSpecs;