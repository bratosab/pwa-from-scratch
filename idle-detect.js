if ("IdleDetector" in window) {
  const idleBtn = document.getElementById("idle");
  idleBtn.addEventListener("click", () => runIdleDetection());

  async function runIdleDetection() {
    const state = await IdleDetector.requestPermission();
    console.log("state", state);

    const idleDetector = new IdleDetector();

    idleDetector.addEventListener("change", () => {
      const { userState, screenState } = idleDetector;
      console.log("idleDetector", idleDetector);

      if (userState == "idle") {
        console.log("userState", userState);
        // Do some user state update here...
      }
    });

    await idleDetector.start({
      threshold: 60000,
    });
  }
}
