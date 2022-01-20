import React from "react"; 

interface UserAvatarProps {
    src: string,
    designation?: string,
    style ?: string
  }
  
class UserAvatar extends React.Component<UserAvatarProps> {
  constructor(props : any) {
    super(props);
  }
  render() {
    return (
      <div className="feature-avatar-cont">
        <img className={"rounded-circle feature-avatar-img " + this.props.style}src={this.props.src}
          data-holder-rendered="true"/>
          {this.props.designation}
    </div>
    );
  }
}
  
export default UserAvatar;