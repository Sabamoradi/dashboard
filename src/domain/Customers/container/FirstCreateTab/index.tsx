import { Alert, Form, Input } from "antd";
import { localTexts } from "../../../../locals/text";
import "./style.scss";

const FirstCreateTab = () => {
  const { TextArea } = Input;
  return (
    <>
      <Form name="addCustomer" layout="vertical" autoComplete="off">
        <div className="form-col">
          <Form.Item
            label={localTexts.nameAndLastName}
            name="addCustomer"
            className="first-input"
          >
            <Input placeholder={localTexts.fillNameAndLastName} />
          </Form.Item>
          <Form.Item
            label={localTexts.phone}
            name="addCustomerNum"
            className="first-input"
          >
            <Input placeholder={localTexts.addPhoneNumber} />
          </Form.Item>
        </div>
        <div className="form-col-100">
          <Form.Item label={localTexts.address} name="addCustomerAddress">
            <TextArea rows={4} placeholder={localTexts.addAddress} maxLength={6} />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default FirstCreateTab;
