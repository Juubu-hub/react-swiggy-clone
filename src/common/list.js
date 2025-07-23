
      {searchText.length > 0 && (<>{loader ? (Array(6).fill("").map((r, index) => <ShimmerLoader key={index} />)) : ( <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>{filteredRes.map((r) => ( <RestaurantCard  key={r.id}  name={r.name}  image={r.image}  cuisine={r.cuisines}  rating={r.rating}  offer={r.offer}  items={r.items}/>))}
            </div>
          )}
        </>
      )}


