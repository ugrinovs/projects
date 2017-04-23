using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trafostanice.Model
{
	public class Transformator
	{
		private int id;
		private string naziv;
		private string voltaza;
		private Trafostanica trafostanica;


		public Transformator(int id, string naziv, string voltaza, Trafostanica trafostanica)
		{
			this.id = id;
			this.naziv = naziv;
			this.voltaza = voltaza;
			this.trafostanica = trafostanica;
		}

		public int Id
		{
			get
			{
				return id;
			}

			set
			{
				id = value;
			}
		}

		public string Naziv {
			get {
				return naziv;
			}
			set {
				naziv = value;
			}
		}

		public string Voltaza
		{
			get
			{
				return voltaza;
			}
			set
			{
				voltaza = value;
			}
		}

		public Trafostanica Trafostanica {
			get {
				return trafostanica;
			}
			set {
				trafostanica = value;
			}
		}
	}
}
