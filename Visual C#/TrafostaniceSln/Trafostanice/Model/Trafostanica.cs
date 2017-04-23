using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trafostanice.Model
{
	public class Trafostanica
	{
		private int id;
		private string naziv;
		private Grad grad;

		public Trafostanica() {
		}

		public Trafostanica(int id, string naziv, Grad grad) {
			this.id = id;
			this.naziv = naziv;
			this.grad = grad;
		}

		public int Id {
			get {
				return id;
			}
			set {
				id = value;
			}	
		}

		public string Naziv
		{
			get
			{
				return naziv;
			}
			set
			{
				naziv = value;
			}
		}

		public Grad Grad
		{
			get
			{
				return grad;
			}
			set
			{
				grad = value;
			}
		}
	}
}
