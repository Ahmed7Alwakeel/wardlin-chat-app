import Banner from "@/components/home/Banner";
import ChatFeatures from "@/components/home/ChatFeatures";
import JoinUs from "@/components/home/JoinUs";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    localStorage.removeItem('chat')
  }, [])
  return (
    <>
      <Banner />
      <ChatFeatures />
      <JoinUs />
    </>
  )
}
