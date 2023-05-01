import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

export default function CategoryCard({ category, details }) {
  return (
    <div className="categorycard">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${category}`}
          id={category}
        >
          <Typography>{category}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListItem button>
              <ListItemText primary="3000" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="200" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="3000" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="200" />
            </ListItem>
            <Divider />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
