

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class MovieLogic {
	
	public List<Actor> findAllActors() {
		Connection con = DatabaseAccess.connect();
		String query = "SELECT * FROM actors";
		ResultSet rs = DatabaseAccess.retrieve(con, query);
		List<Actor> actors = new ArrayList<Actor>();
		try {
			while(rs.next()) {
				Actor a = new Actor();
				a.setFirstName(rs.getString("firstname"));
				a.setLastName(rs.getString("lastname"));
				actors.add(a);
			} // end of while
			rs.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return actors;
	} // end of findAllActors

}
