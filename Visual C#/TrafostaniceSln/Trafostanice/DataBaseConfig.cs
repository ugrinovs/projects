using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
namespace Trafostanice
{
	class DatabaseConfig
	{
		private string password = "123456";
		public MySqlConnection GetConnection() {
			string connStr ="server=localhost;user=trafostanica;database=trafostanica;port=3306;password=" + password;
			MySqlConnection conn = new MySqlConnection(connStr);
			return conn;
		}
	}
}
