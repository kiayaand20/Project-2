function Summer(props) {
  return (
    <div>
      <h1>Summer Activities</h1>
      {
        props.activity.map((activity) => (
          activity.fields.season === "Summer" ?
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

export default Summer;