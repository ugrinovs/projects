using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Trafostanice.Model;

namespace Trafostanice.Repository
{
	class TransformatorRepository
	{
		MySqlConnection conn = new DatabaseConfig().GetConnection();

		public List<Transformator> findAllByTrafostanicaAndGrad(Trafostanica trafostanica)
		{
			List<Transformator> transformator = new List<Transformator>();
			string query = "SELECT id, naziv_transformatora, voltaza FROM transformator WHERE trafo_id = @param1 ";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			cmd.Parameters.AddWithValue("@param1", trafostanica.Id);
			MySqlDataReader reader = cmd.ExecuteReader();

			while (reader.Read())
			{
				transformator.Add(new Transformator(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), trafostanica));
			}
			conn.Close();
			return transformator;
		}
	}
}
