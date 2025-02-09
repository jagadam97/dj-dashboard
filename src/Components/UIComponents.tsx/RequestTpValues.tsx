"use client";

import requestTimes from "@/Dbcalls/ResponseTimes";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Cards from "./Cards";

export default function RequestTpValues() {
  const [data, setData] = React.useState({
    tp50: 0,
    tp75: 0,
    tp90: 0,
    tp99: 0,
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await requestTimes();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch request times:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-screen">
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography component="div">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-row">
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <>
                <Cards label="tp50" value={data.tp50} />
                <Cards label="tp75" value={data.tp75} />
                <Cards label="tp90" value={data.tp90} />
                <Cards label="tp99" value={data.tp99} />
              </>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
