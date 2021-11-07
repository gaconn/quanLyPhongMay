import { Alert } from "react-bootstrap";
const AlertMessage = ({ type }) => {
    return type === null ? null : (
        <Alert variant={type.info}>{type.message}</Alert>
    );
};

export default AlertMessage;
