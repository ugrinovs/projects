using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Trafostanice.Model;

namespace Trafostanice.Repository
{
	class TrafostanicaRepository
	{
		private MySqlConnection conn = new DatabaseConfig().GetConnection();
		private GradRepository gradRepository = new GradRepository();
		public List<Trafostanica> findAll()
		{
			List<Trafostanica> trafostanice = new List<Trafostanica>();
			string query = "SELECT id, naziv_trafostanice, grad_id FROM trafostanica";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			MySqlDataReader reader = cmd.ExecuteReader();

			while (reader.Read())
			{
				Grad grad = gradRepository.findOne(reader.GetInt32(2));
				trafostanice.Add(new Model.Trafostanica(reader.GetInt32(0), reader.GetString(1), grad));
			}
			conn.Close();
			return trafostanice;
		}

		public Trafostanica findOne(int id)
		{
			Trafostanica trafostanica = null;
			string query = "SELECT id, naziv_trafostanice, grad_id FROM trafostanica WHERE id = @param1";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			cmd.Parameters.AddWithValue("@param1", id);
			MySqlDataReader reader = cmd.ExecuteReader();

			if (reader.Read())
			{
				Grad grad = gradRepository.findOne(reader.GetInt32(2));
				trafostanica = new Trafostanica(reader.GetInt32(0), reader.GetString(1), grad);
			}
			conn.Close();
			return trafostanica;
		}

		public List<Trafostanica> findAllByGrad(Grad grad)
		{
			List<Trafostanica> trafostanice = new List<Trafostanica>();
			string query = "SELECT id, naziv_trafostanice FROM trafostanica WHERE grad_id = @param1";
			conn.Open();
			MySqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = query;
			cmd.Parameters.AddWithValue("@param1", grad.Id);
			MySqlDataReader reader = cmd.ExecuteReader();

			while (reader.Read())
			{
				trafostanice.Add(new Model.Trafostanica(reader.GetInt32(0), reader.GetString(1), grad));
			}
			conn.Close();
			return trafostanice;
		}
	}
}
