using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using MySql.Data;
using MySql.Data.MySqlClient;
using static Trafostanice.DatabaseConfig;
namespace Trafostanice
{
	class GradRepository
	{
		private MySqlConnection conn = new DatabaseConfig().GetConnection();
		public List<Grad> findAll() {
			List<Grad> gradovi = new List<Grad>();
			string query = "SELECT naziv_grada, id FROM grad";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			MySqlDataReader reader = cmd.ExecuteReader();

			while (reader.Read()) {
				gradovi.Add(new Grad(reader.GetInt32(1), reader.GetString(0)));
			}
			conn.Close();
			return gradovi;
		}

		public Grad findOne(int id)
		{
			Grad grad = null;
			string query = "SELECT naziv_grada, id FROM grad WHERE id = @param1";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			cmd.Parameters.AddWithValue("@param1", id);
			MySqlDataReader reader = cmd.ExecuteReader();

			if (reader.Read())
			{
				grad = new Grad(reader.GetInt32(1), reader.GetString(0));
			}
			conn.Close();
			return grad;
		}

		public Grad findByName(String name) {
			Grad grad = null;
			string query = "SELECT naziv_grada, id FROM grad WHERE naziv_grada = @param1";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			cmd.Parameters.AddWithValue("@param1", name);
			MySqlDataReader reader = cmd.ExecuteReader();

			if (reader.Read())
			{
				grad = new Grad(reader.GetInt32(1), reader.GetString(0));
			}
			conn.Close();
			return grad;
		}

	}
}
