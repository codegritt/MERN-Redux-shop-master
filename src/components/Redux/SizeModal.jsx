import { Modal } from "antd";
import { useState } from "react";
import SizeModall from "./SizeModal.module.css";

const SizeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <p className={SizeModall.sizemodall} onClick={showModal}>
        Size Chart
      </p>
      <Modal
        bodyStyle={{ height: 280 }}
        title="Size Chart (Inch)"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <hr></hr>

        <div
          style={{ width: "95%", outline: "0" }}
          class="pdp-size-chart-table-wrapper"
          tabindex="-1"
        >
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
            class="size-chart-unit-wrap"
          ></div>
          <table
            style={{
              display: "table",
              margin: "0 auto",
              width: "100%",
              fontSize: "13px",
              lineHeight: "7px",
              color: "gray",
            }}
            id="size-chart-table-Inch"
            class="size-chart-unit-table  selected"
          >
            <thead style={{ fontWeight: "bold", color: "gray" }}>
              <tr>
                <td>Size</td>
                <td>Brand Size</td>
                <td>Chest</td>
                <td>Shoulder</td>
                <td>Length</td>
                <td>Sleeve Length</td>
                <td>Neck</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>S</td>
                <td>38</td>
                <td>15</td>
                <td>27</td>
                <td>24.5</td>
                <td>7</td>
              </tr>
              <tr>
                <td>M</td>
                <td>M</td>
                <td>40</td>
                <td>16</td>
                <td>28</td>
                <td>25</td>
                <td>8</td>
              </tr>
              <tr>
                <td>L</td>
                <td>L</td>
                <td>42</td>
                <td>17</td>
                <td>29</td>
                <td>25.5</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>XL</td>
                <td>44</td>
                <td>18</td>
                <td>30</td>
                <td>26</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>2XL</td>
                <td>2XL</td>
                <td>46</td>
                <td>19</td>
                <td>31</td>
                <td>28</td>
                <td>9</td>
              </tr>
              <tr>
                <td>3XL</td>
                <td>3XL</td>
                <td>28</td>
                <td>20</td>
                <td>32</td>
                <td>29</td>
                <td>9.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};
export default SizeModal;
