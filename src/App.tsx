import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Chart from "./componnet/chart";
import { data } from "./data/contstants";
import { DialogContent, DialogTitle, ModalDialog } from "@mui/joy";
import "./assets/styles/index.css";

export default function App() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog layout="fullscreen">
          <ModalClose variant="outlined" />
          <DialogTitle>Chart</DialogTitle>
          <DialogContent>
            <div className="chart-container">
              <Chart data={data} />
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}