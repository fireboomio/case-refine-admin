import { Button, Result } from "@pankod/refine-antd"
import { useLogout } from "@pankod/refine-core";

const InternalSystemError = () => {
  const { mutate: logout } = useLogout();
  return (
    <Result status="500" title="500" subTitle="Sorry, something went wrong." extra={
      <Button type="primary" onClick={() => logout()}>Logout</Button>
    } />
  )
}

export default InternalSystemError