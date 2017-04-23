using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trafostanice.Service
{
	interface GradService
	{

		List<Grad> findAll();

		Grad findOne(int id);

		Grad findByName(String name);

		Grad save(Grad grad);

		Grad saveAll(List<Grad> gradovi);

		Grad remove(int id);

	}
}
