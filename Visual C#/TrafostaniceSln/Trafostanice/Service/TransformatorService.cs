using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trafostanice.Model;

namespace Trafostanice.Service
{
	interface TransformatorService
	{

		List<Transformator> findAllByTrafostanicaAndGrad(Trafostanica trafostanica);


	}
}
