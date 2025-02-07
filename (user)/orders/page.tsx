import Container from "@/components/Container";
import Orders from "@/components/Orders";
const OrdersPage = () => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl semibold">Your Orders</h2>
      <Orders />
    </Container>
  );
};

export default OrdersPage;
