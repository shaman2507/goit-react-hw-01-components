export default function Statistics({title, stats, id}) {
   return <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                <li className="item" key={id}>
                    <span className="label">{title}</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item" key={id}>
                    <span className="label">{title}</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item" key={id}>
                    <span className="label">{title}</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item" key={id}>
                    <span className="label">{title}</span>
                    <span className="percentage">{stats}</span>
                </li>
            </ul>
        </section>
}