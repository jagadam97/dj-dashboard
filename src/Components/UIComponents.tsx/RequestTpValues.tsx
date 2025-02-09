import requestTimes from "@/Dbcalls/ResponseTimes";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Cards from "./Cards";

export default function RequestTpValues() {
  return (
    <div className="w-screen">
      <Accordion>
        <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"       
        >
        <Typography component="div">Accordion 1</Typography>
        </AccordionSummary>
              <AccordionDetails>
                  <div className="flex flex-row">
                      
                      <Cards label="tp50" value={requestTimes.tp50} />
                      
                      <Cards label="tp75" value={requestTimes.tp75} />
                      
                      <Cards label="tp90" value={requestTimes.tp90} />
                      
                        <Cards label="tp99" value={requestTimes.tp99} />
                  </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}