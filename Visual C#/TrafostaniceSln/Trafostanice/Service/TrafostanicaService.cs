using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trafostanice.Model;

namespace Trafostanice.Service
{
	interface TrafostanicaService
	{
		List<Trafostanica> findAll();

		Trafostanica findOne(int id);

		List<Trafostanica> findAllByGrad(Grad grad);

		Trafostanica save(Trafostanica trafostanica);

		Trafostanica saveAll(List<Trafostanica> trafostanice);

		void delete(int id);
	}
}
