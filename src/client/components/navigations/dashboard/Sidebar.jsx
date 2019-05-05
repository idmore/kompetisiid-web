import React from "react"

// components
import { Link } from "react-router-dom"

export default props => {
  const stats =
    props.stats && props.stats.status === 200
      ? props.stats
      : { request: {}, competition: {}, news: {}, members: {} }
  return (
    <div className="dashboard-sidebar">
      <ul>
        <li>
          {" "}
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {/* compotition */}
        <hr />
        <li>
          {" "}
          <strong>Kompetisi</strong>
        </li>
        <li>
          <Link to="/dashboard/competition/create">
            <i className="fas fa-plus" /> Kirim Kompetisi
          </Link>
        </li>

        {/* link to waiting competition */}
        {stats.competition && stats.competition.waiting ? (
          <li>
            <Link to="/dashboard/competition/waiting">
              Menunggu{" "}
              <span className="label label-red">
                {stats.competition.waiting}
              </span>
            </Link>
          </li>
        ) : null}

        {/* link to live competition */}
        {stats.competition && stats.competition.live ? (
          <li>
            <Link to="/dashboard/competition/live">
              Berlangsung{" "}
              <span className="label label-blue">
                {stats.competition.live}
              </span>
            </Link>
          </li>
        ) : null}
        

        {/* link to published competition */}
        {stats.competition && stats.competition.posted ? (
          <li>
            <Link to="/dashboard/competition/posted">
              Dipublikasi{" "}
              <span className="label label-blue">
                {stats.competition.posted}
              </span>
            </Link>
          </li>
        ) : null}

        {/* link to rejected competition */}
        {stats.competition && stats.competition.rejected ? (
          <li>
            <Link to="/dashboard/competition/rejected">
              Ditolak{" "}
              <span className="label label-blue">
                {stats.competition.rejected}
              </span>
            </Link>
          </li>
        ) : null}
       
        {/* end of competition */}

        {/* logout from dashboard */}
        <hr />
        <li>
          <a onClick={() => props.handleLogout()} href="javascript:;">
            Logout
          </a>
        </li>
        {/* end of logout from dashboard */}
      </ul>
    </div>
  )
}
