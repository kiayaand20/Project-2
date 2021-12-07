function Footer() {
  return (
    <>
      <div className="footer">
        <label className="footer-name">&copy; Kiaya Anderson</label>
        <div className="icons">
          <a href="http://github.com">
          <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="GitHub"
           target="_blank" height="30px" /></a>
          <a href="https://www.linkedin.com/in/kiayaanderson/">
          <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png" alt="LinkedIn"
              target="_blank" height="30px" /></a>
        </div>
        <label className="img-src">Images from: <em><strong>www.pixabay.com</strong></em> </label>
      </div >
    </>
  )
}

export default Footer;