import { Alert, Form, Input } from "antd";
import { localTexts } from "../../../../locals/text";
import "./style.scss";

const FirstCreateTab = () => {
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
        </div>
      </Form>
    </>
  );
};

export default FirstCreateTab;
