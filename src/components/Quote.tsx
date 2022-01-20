import React from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface QuoteProps {
    quote: string,
    style?: string
  }
  
class Quote extends React.Component<QuoteProps> {
  constructor(props : any) {
    super(props);
  }
  render() {
    return (
      <div className="feature-quote">
       <blockquote className="blockquote">
            <p className={this.props.style}>
            <FontAwesomeIcon icon={faQuoteLeft} />

              <span className="lead font-italic feature-quote-cont">{this.props.quote}</span>
              <FontAwesomeIcon icon={faQuoteRight} />
            </p>
        </blockquote>
    </div>
    );
  }
}
  
export default Quote;