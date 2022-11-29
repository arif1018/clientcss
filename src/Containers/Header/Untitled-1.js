<ListGroup as='ul' className="list" >
{sidebarData.map((item, index) => {
  return (
    <ListGroup.Item as='li' key={index} className={open ? "open" : ""}>
      <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen(!open); }}>
        <NavLink to={item.path}> <i className={`fa-solid ${item.icon}`}></i> <span> {item.heading}  </span> </NavLink>
        <i className={`fa-solid ${item.showicon1} ${item.showicon2} ${item.showicon3}`} > </i>

        
        {/* <i className="fa-solid fa-chevron-down me-3 text-white"></i> */}
        {/* <div className="nestedList ">
          <ListGroup as='ul' className="list_ d-none">
            <ListGroup.Item as='li'><NavLink to={item.innerchild[0].innerpath}> <i className={`fa-solid ${item.innerchild[0].innericon}`}></i> <span> {item.innerchild[0].innerheading} </span> </NavLink></ListGroup.Item>
          </ListGroup>
        </div> */}
      </div>
    </ListGroup.Item>
  );
})}
</ListGroup>