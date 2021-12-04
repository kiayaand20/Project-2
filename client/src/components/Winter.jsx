function Winter(props) {
  return (
    <div>
      <h1>Winter Activities</h1>
      {
        props.activity.map((activity) => (
          activity.fields.season === "Winter" ?
            <>
              <h3 key={activity.id}>{activity.fields.activity}</h3>
              <img src={activity.fields.image} alt="activity" />
              <h3>{activity.fields.description}</h3>
            </>
            :
            null
        ))
      }
    </div>
  )
}

export default Winter;