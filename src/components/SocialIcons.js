const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Rayyks">
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Rayyand' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/rayyand/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Rayyand' LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/rayy__dna/"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Rayyand' Instagram Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/Rayy__And"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Rayyand' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
