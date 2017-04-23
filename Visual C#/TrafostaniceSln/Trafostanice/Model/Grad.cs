using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trafostanice
{
	public class Grad
	{
		private int id;
		private string naziv;

		public Grad(int id, string naziv)
		{
			this.id = id;
			this.naziv = naziv;
		}

		public string Naziv {
			get {
				return naziv;
			}
			set
			{
				naziv = value;
			}
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

	}
}
