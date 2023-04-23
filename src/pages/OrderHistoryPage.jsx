import MiniNav from "../components/MiniNav";
import { getOrders } from "../utilities/orders-api";
import { useEffect, useState } from "react";
import { VStack, HStack, Text, Button, Spacer, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderHistoryPage = ({ isDrawerOpen, setIsDrawerOpen, handleUser }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAll() {
      const orders = await getOrders();
      setOrders(orders);
      setLoading(false);
    }
    getAll();
  }, []);

  if (loading) {
    return (
        <>
            <MiniNav
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                handleUser={handleUser}
            />
            <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" />
        </>
    );
  }

  if (orders.length === 0) {
    return (
      <>
        <MiniNav
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          handleUser={handleUser}
        />
        <VStack my="20">
          <Text fontSize="3xl" fontWeight="bold" mb="10">
            No purchases made
          </Text>
          <Link to="/products">
            <Button colorScheme="blue" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </VStack>
      </>
    );
  }

  return (
    <>
      <MiniNav
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        handleUser={handleUser}
      />
      <VStack my="10">
        <Text fontSize="3xl" fontWeight="bold" mb="10">
          Order History
        </Text>
        {orders.map((order) => (
          <HStack
            key={order._id}
            w="100%"
            py="4"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
          >
            <Text>{new Intl.DateTimeFormat('en-US').format(new Date(order.createdAt))}</Text>
            <Text>{order._id.toString().slice(-6)}</Text>
            <Spacer />
            <Text fontWeight="bold">${order.total.toFixed(2)}</Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default OrderHistoryPage;
