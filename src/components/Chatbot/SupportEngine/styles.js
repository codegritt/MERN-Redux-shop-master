export const styles = {
  chatWithMeButton: {
    cursor: "pointer",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    borderRadius: "50%",
    // Background
    backgroundImage: `url(data:image/png;base64,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)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "64px",
    backgroundColor: "gray",
    // Size
    width: "64px",
    height: "64px",
  },
  avatarHello: {
    // Position
    position: "absolute",
    left: "calc(-100% - 44px - 28px)",
    top: "calc(50% - 24px)",
    // Layering
    zIndex: "10000",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    padding: "12px 12px 12px 16px",
    borderRadius: "24px",
    // Color
    backgroundColor: "#f9f0ff",
    color: "gray",
  },
  supportWindow: {
    // Position
    position: "fixed",
    bottom: "116px",
    right: "24px",
    // Size
    width: "320px",
    height: "430px",
    maxWidth: "calc(100% - 48px)",
    maxHeight: "calc(100% - 48px)",
    backgroundColor: "white",
    // Border
    borderRadius: "12px",
    border: `2px solid #c6003d`,
    overflow: "hidden",
    // Shadow
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    zIndex: "10",
  },
  emailFormWindow: {
    width: "100%",
    overflow: "hidden",
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
  },
  stripe: {
    position: "relative",
    top: "-45px",
    width: "100%",
    height: "308px",
    backgroundColor: "#7a39e0",
    transform: "skewY(-12deg)",
  },
  topText: {
    position: "relative",
    width: "100%",
    top: "15%",
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
  },
  emailInput: {
    width: "66%",
    textAlign: "center",
    outline: "none",
    padding: "12px",
    borderRadius: "12px",
    border: "2px solid #7a39e0",
  },
  bottomText: {
    position: "absolute",
    width: "100%",
    top: "60%",
    color: "#7a39e0",
    fontSize: "24px",
    fontWeight: "600",
  },
  loadingDiv: {
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
  },
  loadingIcon: {
    color: "#7a39e0",
    position: "absolute",
    top: "calc(50% - 51px)",
    left: "calc(50% - 51px)",
    fontWeight: "600",
  },
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "whitesmoke",
  },
};
