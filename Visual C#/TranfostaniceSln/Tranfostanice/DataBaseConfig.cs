using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;


namespace Tranfostanice
{
	class DataBaseConfig
	{
		MySqlConnection connection;
		MySqlDataAdapter adapter;
		private string DBServer = "localhost";
		private string username = "trafostanica";
		private string password = "123456";
		private string DBName = "trafostanica";
		public DataTable GetTable(String query)
		{
			String connString = "server=" + DBServer + ";uid=" + username + ";pwd=" + password + ";database=" + DBName;
			connection = new MySqlConnection(connString);
			adapter = new MySqlDataAdapter(query, connection);
			DataTable dataTable = new DataTable();
			adapter.Fill(dataTable);
			return dataTable;
		}

		public Grad GetGradovi()
		{
			String query = "SELECT * FROM grad";
			String connString = "server=" + DBServer + ";uid=" + username + ";pwd=" + password + ";database=" + DBName;
			connection = new MySqlConnection(connString);
			MySqlCommand cmd = connection.CreateCommand();
			cmd.CommandText = "SELECT naziv_grada, id FROM grad";
			connection.Open();
			MySqlDataReader reader = cmd.ExecuteReader();
			List<Grad> gradovi = new List<Grad>();
			while (reader.Read())
			{
				gradovi.Add(new Grad(reader.GetString(0), reader.GetInt32(1)));
			}
			Grad grad = new Grad("ime", 22);
			return grad;
		}
	}
}
