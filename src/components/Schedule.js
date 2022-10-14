import { Link } from 'react-router-dom';

function Schedule({ movieSchedule }) {
    return (
        <li>
            <Link to={'/ticketing'}>
                <em>{movieSchedule?.time}</em>
                <span class="txt-lightblue">98석</span>
            </Link>
        </li>
    );
}

export default Schedule;
