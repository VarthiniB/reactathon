import React, {Component} from 'react';

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                              <p>Welcome {this.props.name}</p>
                   
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                      {/*}  <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
        </div> */}
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>JOBS</span>
                                <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                            </a>
                            <ul className="treeview-menu ">
                            
                                <li><a href="#"><i className="fa fa-circle-o"></i> Search</a></li>
                                <li><a href="#"><i className="fa fa-circle-o"></i> Applied</a></li>
                                <li><a href="#"><i className="fa fa-circle-o"></i> Attended</a></li>
                                <li><a href="#"><i className="fa fa-circle-o"></i> Selected</a></li>
                            </ul>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa fa-th"></i> <span>Upload Verification Files</span>                           
                        </a>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            
                            <span>Provide Feedback</span>
                           
                        </a>
                       
                        </li>
                       {/*}
                        <li>
                        <a href="pages/calendar.html">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                           
                        </a>
                        </li>
                        <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className=""></i> <span>FeedBack</span>
                           
                        </a>
    </li> */}
                    </ul>
                </section>
            </aside> 
        )
    }
}
