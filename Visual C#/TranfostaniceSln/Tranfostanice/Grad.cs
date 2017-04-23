using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tranfostanice
{
	class Grad
	{
		public Grad()
		{
		}
		public Grad(string name, int id)
		{
			Name = name;
			Id = id;
		}

		public string Name { get; set; }
		public int Id { get; set; }
	}
}
