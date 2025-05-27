import { useRouter } from "next/navigation.js";

export function primarybtnOnClickevent() {
  const router = useRouter();

  router.push("/pricing");
}
export function secondarybtnOnClickevent() {
  window.location.href =
    "mailto:hello@kamyabinetwork.com?subject=Requesting%20Invite%20to%20Kamyabi%20Network&amp;body=Hi%20Kamyabi%20Team,%0A%0AI’m%20interested%20in%20joining%20the%20community.%20Please%20let%20me%20know%20how%20to%20get%20access.%0A%0AThanks,%0A[Your%20Name]";
}
